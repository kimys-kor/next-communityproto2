"use client";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import styled from "styled-components";

import ReactQuill, { ReactQuillProps } from "react-quill";
import { BeatLoader } from "react-spinners";
import { useMemo, useRef } from "react";
import ImageUploader from "../../image-uploader/ImageUploader";
import { colors, formats } from "@/app/types";

interface ForwardedQuillComponent extends ReactQuillProps {
  forwardedRef: React.Ref<ReactQuill>;
}

const Editor = dynamic(
  async () => {
    const { default: QuillComponent } = await import("react-quill");
    const { QuillImageResize } = await import("./QuillImageResize");
    QuillComponent.Quill.register("modules/imageResize", QuillImageResize);

    function ReactQuillComponent({
      forwardedRef,
      ...props
    }: ForwardedQuillComponent) {
      const handleImageUpload = (imageUrls: string[]) => {
        if (typeof forwardedRef !== "function") {
          const editor = (forwardedRef?.current as ReactQuill).getEditor();

          if (Array.isArray(imageUrls) && imageUrls.length > 0) {
            imageUrls.forEach((imgUrl: string) => {
              const range = editor.getSelection();
              const index = range ? range.index : 0;
              editor.insertEmbed(
                index,
                "image",
                `${process.env.NEXT_PUBLIC_API_URL + imgUrl}`
              );
              editor.setSelection({ index: index + 1, length: 0 });
            });
          } else {
            console.error(
              "imageUrls is not an array or it is empty:",
              imageUrls
            );
          }
        }
      };

      const handleImageUploadClick = () => {
        // Open a new window with a URL to the image uploader
        const newWindow = window.open(
          "/image-uploader", // This should be the path or URL of your ImageUploader component/page
          "_blank",
          "width=600,height=400"
        );

        // Ensure the new window has access to handle the image upload
        newWindow?.addEventListener("message", (event) => {
          // Assuming the ImageUploader sends image URLs back via `postMessage`
          if (event.origin === window.location.origin && event.data.imageUrls) {
            handleImageUpload(event.data.imageUrls);
          }
        });
      };

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
              image: handleImageUploadClick,
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
