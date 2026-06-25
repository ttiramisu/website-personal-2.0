import { isValidElement, type ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

function nodeToText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join("");
  if (isValidElement(node))
    return nodeToText((node.props as { children?: ReactNode }).children);
  return "";
}

function createSlugFactory() {
  const usedSlugs = new Map<string, number>();
  return (children: ReactNode) => {
    const base =
      nodeToText(children)
        .toLowerCase()
        .replace(/['"]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || "section";
    const count = usedSlugs.get(base) ?? 0;
    usedSlugs.set(base, count + 1);
    return count === 0 ? base : `${base}-${count + 1}`;
  };
}

export default function MarkdownRenderer({ content }: { content: string }) {
  const getHeadingId = createSlugFactory();

  const components: Components = {
    h1: ({ children, ...props }) => <h1 id={getHeadingId(children)} {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 id={getHeadingId(children)} {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 id={getHeadingId(children)} {...props}>{children}</h3>,
    h4: ({ children, ...props }) => <h4 id={getHeadingId(children)} {...props}>{children}</h4>,
    h5: ({ children, ...props }) => <h5 id={getHeadingId(children)} {...props}>{children}</h5>,
    h6: ({ children, ...props }) => <h6 id={getHeadingId(children)} {...props}>{children}</h6>,

    a: ({ children, ...props }) => (
      <a {...props} rel={props.target === "_blank" ? "noreferrer noopener" : props.rel}>
        {children}
      </a>
    ),

    // Neutralize the default <pre> wrapper react-markdown adds
    pre: ({ children }) => <>{children}</>,

    code: ({ className, children }) => {
      const language = className?.match(/language-([\w-]+)/)?.[1];
      const code = Array.isArray(children)
        ? children.join("")
        : String(children ?? "");
      const isInline = !language && !code.includes("\n");

      if (isInline) {
        return <code className={className}>{children}</code>;
      }

      return (
        <div className="markdown-pre">
          {language && (
            <div className="markdown-pre__label">{language}</div>
          )}
          <SyntaxHighlighter
            language={language ?? "text"}
            style={oneDark}
            PreTag="div"
            customStyle={{
              margin: 0,
              padding: "1rem 1.1rem 1.15rem",
              background: "transparent",
              overflowX: "auto",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
            codeTagProps={{
              style: {
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              },
            }}
          >
            {code.replace(/\n$/, "")}
          </SyntaxHighlighter>
        </div>
      );
    },

    table: ({ children, ...props }) => (
      <div className="markdown-table">
        <table {...props}>{children}</table>
      </div>
    ),

    img: ({ alt, ...props }) => (
      <img alt={alt ?? ""} {...props} loading="lazy" decoding="async" />
    ),
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}