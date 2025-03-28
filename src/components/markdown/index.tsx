import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import CopyButton from "./copy-button";
import "highlight.js/styles/atom-one-dark.css";
import "./index.scss";

const MyMarkdown = ({ content }: { content: string }) => {
  return (
    <Markdown
      rehypePlugins={[rehypeHighlight]}
      components={{
        pre: ({ children }) => <pre className="p-0">{children}</pre>,
        code: ({ node, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          if (match?.length) {
            const id = Math.random().toString(36).substr(2, 9);
            return (
              <div className="my-6">
                <div className="code-container-header  flex h-12 items-center justify-between ">
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {node?.data?.meta}
                    </p>
                  </div>
                  <CopyButton id={id} />
                </div>
                <div className="overflow-x-auto ">
                  <div
                    id={id}
                    className="code-container-body p-4  text-base leading-7"
                  >
                    {children}
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <code {...props} className="not-prose rounded">
                {children}
              </code>
            );
          }
        },
      }}
      className="markdown-custom prose prose-zinc"
    >
      {content}
    </Markdown>
  );
};

export default MyMarkdown;
