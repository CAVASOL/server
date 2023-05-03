import React from "react";
import EditorMenuBar from "./EditorMenuBar";
import { Editor, EditorContent } from "@tiptap/react";

type Props = {
  contentErr: string;
  isEditable: boolean;
  setContent: (content: string) => void;
  editor: Editor | null;
  title: string;
};

const Article = ({
  contentErr,
  isEditable,
  setContent,
  editor,
  title,
}: Props) => {
  if (!editor) {
    return null;
  }

  return (
    <article className="text-wh-500 leading-8">
      <div
        className={
          isEditable ? "border-2 rounded-md bg-wh-50 p-3" : "w-full max-w-full"
        }
      >
        {isEditable && (
          <>
            <EditorMenuBar editor={editor} />
            <hr className="border-1 mt-2 mb-5" />
          </>
        )}
        <EditorContent editor={editor} />
      </div>
      {contentErr && <p className="mt-1 text-wh-900">{contentErr}</p>}
    </article>
  );
};

export default Article;
