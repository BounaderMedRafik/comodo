import React from "react";
import { Search, Command } from "lucide-react";

const DesignStylePageContent = () => {
  const distros = [1, 2, 3]; // dummy list for header count
  const tokenClasses = {
    background: "bg-background",
    foreground: "bg-foreground",
    primary: "bg-primary",
    "primary-foreground": "bg-primary-foreground",
    secondary: "bg-secondary",
    "secondary-foreground": "bg-secondary-foreground",
    muted: "bg-muted",
    "muted-foreground": "bg-muted-foreground",
    accent: "bg-accent",
    "accent-foreground": "bg-accent-foreground",
    destructive: "bg-destructive",
  };

  return (
    <div className="wrapper pt-24 pb-12">
      {/* Header */}
      <div className="text-xl font-mono font-semibold flex items-center justify-center flex-col mb-10">
        <div>Design System Preview</div>
        <div className="text-sm opacity-75 font-normal max-w-sm text-center">
          See how headings, text, and theme colors render with your current
          theme setup.
        </div>
        <div className="text-xs opacity-50 mt-4">
          All core styles previewed.
        </div>
      </div>

      {/* Headings */}
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      {/* Typography */}
      <p>
        This is a paragraph. It demonstrates how paragraph text looks.{" "}
        <a href="#">This is a link</a>.
      </p>

      <blockquote>
        This is a blockquote used to highlight quoted text elegantly.
      </blockquote>

      <ul>
        <li>Unordered list item</li>
        <li>Another item</li>
      </ul>

      <ol>
        <li>Ordered list item</li>
        <li>Another ordered item</li>
      </ol>

      <p>
        Inline <code>code</code> snippet.
      </p>

      <hr />

      <table>
        <thead>
          <tr>
            <th>Heading</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Item</td>
            <td>Details</td>
          </tr>
        </tbody>
      </table>

      {/* Color tokens preview */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-10">
        {Object.entries(tokenClasses).map(([token, className]) => (
          <div
            key={token}
            className="flex flex-col items-center gap-1 text-xs text-center"
          >
            <div
              className={`w-10 h-10 border border-dashed  shadow-inner ${className}`}
            />
            <code className="opacity-75 border border-dashed bg-primary/25 text-xs rounded-none">
              {token}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignStylePageContent;
