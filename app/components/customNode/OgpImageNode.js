'use client'

import { useState, useEffect  } from 'react';
import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer, NodeViewWrapper } from "@tiptap/react";

function LinkCardNode({ node }) {
  const url = node.attrs["url"]
  const [ogp, setOgp] = useState([]);

  useEffect(() => {
      (async() => {
      
      const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;
      const response = await fetch(proxyUrl);
      const html = await response.text();
      const domParser = new DOMParser();
      const dom = domParser.parseFromString(html, 'text/html');
      const ogp = Object.fromEntries(
          [...dom.head.children]
              .filter(
                  (element) =>
                      element.tagName === 'META' &&
                      element.getAttribute('property')?.startsWith('og:')
              )
              .map((element) => {
                  return [
                      element.getAttribute('property'),
                      element.getAttribute('content')
                  ];
              })
      );
      console.log(ogp)
      setOgp(ogp)
      })()
  }, []);

  return(
      <>
          {Object.keys(ogp).length  === 0 ? (
              <NodeViewWrapper data-drag-handle>
                  <p className="card-text position-relative"><a href={`${url}`} target="_blank" className="card__link">{url}</a></p>
              </NodeViewWrapper>
          ) : (
              <NodeViewWrapper data-drag-handle>
              <div className="card mb-3">
                  <div className="row g-0" href={`${url}`} target="_blank">
                      <div className="col-md-3" style={{maxHeight:'150px'}}>
                          <img src={ogp["og:image"]} className="img-fluid rounded-start w-100 object-fit-cover" alt="..." />
                      </div>
                      <div className="col-md-9">
                          <div className="card-body">
                              <h5 className="card-title">{ogp["og:site_name"]}</h5>
                              <p className="card-text">{ogp["og:description"]}</p>
                          </div>
                      </div>
                  </div>
              </div>
              </NodeViewWrapper>
          )}
      </>
  )
}

//Node.createでカスタムノードを作成
export default Node.create({
  name: "linkcard",
  group: "block",
  content: "inline*",
  draggable: true,
  atom: true,

  addAttributes() {
    return {
      "url": {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "linkcard",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["linkcard", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(LinkCardNode);
  },
});