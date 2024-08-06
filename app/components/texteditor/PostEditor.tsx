import dynamic from "next/dynamic";
import axios, { AxiosError } from "axios";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import styled from "styled-components";

import ReactQuill, { ReactQuillProps } from "react-quill";
import { BeatLoader } from "react-spinners";
import { ChangeEvent, useMemo, useRef } from "react";

interface ForwardedQuillComponent extends ReactQuillProps {
  forwardedRef: React.Ref<ReactQuill>;
}

const colors = [
  "transparent",
  "white",
  "red",
  "yellow",
  "green",
  "blue",
  "purple",
  "gray",
  "black",
];
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "color",
  "image",
  "background",
  "align",
];

const Editor = dynamic(
  async () => {
    const { default: QuillComponent } = await import("react-quill");
    const { QuillImageResize } = await import("./QuillImageResize");
    QuillComponent.Quill.register("modules/imageResize", QuillImageResize);

    function ReactQuillComponent({
      forwardedRef,
      ...props
    }: ForwardedQuillComponent) {
      const fileInput = useRef<HTMLInputElement | null>(null);

      async function changeHandler(event: ChangeEvent<HTMLInputElement>) {
        if (fileInput.current?.files) {
          const files: FileList = fileInput.current.files;
          const formData = new FormData();

          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            formData.append("file", file, file.name);
          }

          try {
            const res = await axios.post("/api/main/image-upload/", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            if (typeof forwardedRef !== "function") {
              const editor = (forwardedRef?.current as ReactQuill).getEditor();

              res.data.forEach((imgUrl: string) => {
                const range = editor.getSelection();
                const index = range ? range.index : 0;
                editor.insertEmbed(
                  index,
                  "image",
                  `${process.env.NEXT_PUBLIC_API_URL + imgUrl}`
                );

                // Use RangeStatic object for setSelection
                editor.setSelection({ index: index + 1, length: 0 });
              });
            }
          } catch (error) {
            console.error(error);

            return error;
          }
        }

        return;
      }

      const modules = useMemo(
        () => ({
          toolbar: {
            container: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [{ align: ["right", "center", "justify"] }],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image"],
              [{ color: colors }],
              [{ background: colors }],
            ],
            handlers: {
              image: () => {
                fileInput.current?.click();
              },
            },
          },
          imageResize: {
            parchment: QuillComponent.Quill.import("parchment"),
            modules: ["Resize", "DisplaySize"],
          },
        }),
        []
      );

      return (
        <Container>
          <input
            type="file"
            ref={fileInput}
            accept="image/*"
            onChange={changeHandler}
            multiple
            hidden
          />
          <QuillComponent
            ref={forwardedRef}
            formats={formats}
            modules={modules}
            {...props}
          />
        </Container>
      );
    }

    return ReactQuillComponent;
  },
  {
    loading: () => (
      <div className="flex justify-center items-center fixed left-0 top-0 w-full h-full bg-white">
        <BeatLoader color="#712ccc" />
      </div>
    ),
    ssr: false,
  }
);

export default Editor;

const Container = styled.div`
  .ql-container {
    height: 400px !important;
    background-color: white;
  }
`;
