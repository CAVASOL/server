"use client";
import React, { useState } from "react";
import { Editor, useEditor } from "@tiptap/react";
import { FormattedPost } from "@/app/types";
import Image from "next/image";
import StarterKit from "@tiptap/starter-kit";
import CategoryAndEdit from "./CategoryAndEdit";
import Article from "./Article";

type Props = {
  post: FormattedPost;
};

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(post.title);
  const [err, setErr] = useState<string>("");
  const [tempTitle, setTempTitle] = useState<string>(title);
  const [content, setContent] = useState<string>(post.content);
  const [contentErr, setContentErr] = useState<string>("");
  const [tempContent, setTempContent] = useState<string>(content);
  const date = new Date(post?.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);

  const handleEditable = (bool: boolean) => {
    setIsEditable(bool);
    editor?.setEditable(bool);
  };

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setErr("");
    setTitle(e.target.value);
  };

  const handleOnChangeContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentErr("");
    setContent((editor as Editor).getHTML());
  };

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    content: content,
    editable: isEditable,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full",
      },
    },
  });

  const handleSubmit = () => {};

  return (
    <div className="prose w-full max-w-full mb-10">
      <h5 className="text-wh-300">
        {`Home > ${post.category} > ${post.title}`}
      </h5>
      <CategoryAndEdit
        isEditable={isEditable}
        handleEditable={handleEditable}
        title={title}
        setTitle={setTitle}
        tempTitle={tempTitle}
        setTempTitle={setTempTitle}
        tempContent={tempContent}
        setTempContent={setTempContent}
        editor={editor}
        post={post}
      />
      <form onSubmit={handleSubmit}>
        <>
          {isEditable ? (
            <div>
              <textarea
                className="border-2 rounded-md bg-wh-50 p-3 w-full"
                placeholder="Title"
                onChange={handleOnChangeTitle}
                value={title}
              />
            </div>
          ) : (
            <h3 className="font-bold text-3xl mt-3">{title}</h3>
          )}
          <div className="flex gap-3">
            <h5 className="font-semibold text-xs">By {post.author}</h5>
            <h6 className="text-wh-300 text-xs">{formattedDate}</h6>
          </div>
        </>
        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            fill
            sizes="(min-width: 480px) 100vw, (max-width: 768px) 85vw, (max-width: 1060px) 75vw, 60vw"
            src={post.image}
            alt={post.title}
            style={{ objectFit: "cover" }}
          />
        </div>
        <Article
          contentErr={contentErr}
          isEditable={isEditable}
          setContent={setContent}
          editor={editor}
          title={title}
        />
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5"
            >
              SUBMIT
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Content;
