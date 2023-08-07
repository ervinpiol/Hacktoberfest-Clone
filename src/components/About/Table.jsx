import React from "react";

const Table = () => {
  return (
    <div className="overflow-scroll">
      <table className="w-full uppercase">
        <thead>
          <tr>
            <th></th>
            <th>Low-Code</th>
            <th>Non-Code</th>
          </tr>
        </thead>
        <tbody className="border-t border-l">
          <tr className="border-b">
            <td className="border-r p-6">Writing</td>
            <td className="border-r p-6">
              <ul>
                <li>Technical documentation</li>
              </ul>
            </td>
            <td className="p-6">
              <ul>
                <li>Translating</li>
                <li>Copy editing</li>
              </ul>
            </td>
          </tr>
          <tr className="border-b">
            <td className="border-r p-6">Design</td>
            <td className="border-r p-6">
              <ul>
                <li>Testing</li>
              </ul>
            </td>
            <td className="p-6">
              <ul>
                <li>User experience testing</li>
                <li>Graphic design</li>
                <li>Video production</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border-r p-6">Advocacy**</td>
            <td className="border-r p-6">
              <ul>
                <li>Talks or presentations</li>
                <li>Technical blog posts</li>
                <li>Podcasts</li>
                <li>Case studies</li>
              </ul>
            </td>
            <td className="p-6">
              <ul>
                <li>Social media</li>
                <li>Blog posts</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
