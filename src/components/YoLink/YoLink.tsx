import { ReactNode } from "react";

interface propsType {
  href: string;
  textSize?: number;
  svgSize?: number;
  children: string | ReactNode;
}

function YoLink({
  href,
  textSize = 16,
  svgSize = 17,
  children = "链接",
}: propsType) {
  const aStyle = {
    fontSize: `${textSize}px`,
  };

  const svgStyle = {
    width: `${svgSize}px`,
    height: `${svgSize}px`,
  };

  return (
    <a
      href={href}
      style={aStyle}
      target="__blank"
      className="text-blue-600 underline transition-colors hover:text-blue-400 active:text-blue-700"
    >
      <svg
        style={svgStyle}
        className="icon inline align-middle"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="7594"
        width="300"
        height="300"
      >
        <path
          d="M96.995556 345.372444a40.334222 40.334222 0 0 1-40.106667-39.822222V180.963556A123.164444 123.164444 0 0 1 178.631111 56.888889h125.895111a39.992889 39.992889 0 1 1 0 79.985778H179.996444a42.723556 42.723556 0 0 0-30.208 12.8 42.325333 42.325333 0 0 0-12.288 30.435555v125.269334a40.106667 40.106667 0 0 1-40.106666 39.992888z"
          fill="#1B69FD"
          p-id="7595"
        ></path>
        <path
          d="M454.769778 581.575111a40.448 40.448 0 0 1-27.989334-12.117333l-45.511111-44.202667a122.311111 122.311111 0 0 1-2.503111-173.226667l216.576-216.291555a122.88 122.88 0 0 1 173.454222-0.682667l91.079112 90.168889a123.448889 123.448889 0 0 1 0.056888 173.852445l-107.064888 107.008a40.106667 40.106667 0 0 1-56.661334 0 39.594667 39.594667 0 0 1-0.682666-55.921778l107.747555-107.576889a42.951111 42.951111 0 0 0 0.113778-60.700445L713.272889 193.991111a43.008 43.008 0 0 0-60.757333-0.113778l-213.902223 213.902223a42.894222 42.894222 0 0 0-0.056889 60.700444l45.056 47.047111a39.992889 39.992889 0 0 1-0.170666 56.433778 42.097778 42.097778 0 0 1-26.624 9.671111z"
          fill="#333333"
          p-id="7596"
        ></path>
        <path
          d="M719.530667 967.111111a40.618667 40.618667 0 1 1 0-81.294222h124.529777a42.951111 42.951111 0 0 0 42.894223-42.894222V718.506667a40.049778 40.049778 0 0 1 80.156444 0v124.359111A123.050667 123.050667 0 0 1 845.368889 967.111111h-125.838222z"
          fill="#1B69FD"
          p-id="7597"
        ></path>
        <path
          d="M330.524444 869.432889v8.931555a123.847111 123.847111 0 0 1-87.153777-36.181333L153.713778 752.64a123.448889 123.448889 0 0 1 0-173.852444L260.892444 473.884444a40.163556 40.163556 0 0 1 56.604445 0.056889 39.537778 39.537778 0 0 1 0.568889 55.921778l-107.690667 105.528889a43.008 43.008 0 0 0-0.056889 60.643556l89.713778 89.6a42.837333 42.837333 0 0 0 60.757333 0.056888l214.243556-213.902222a42.894222 42.894222 0 0 0 0.113778-60.700444l-44.942223-44.828445a40.163556 40.163556 0 0 1-10.979555-28.899555 40.106667 40.106667 0 0 1 67.356444-27.875556l45.056 44.942222a122.424889 122.424889 0 0 1 0.625778 173.283556l-214.755555 214.471111a122.88 122.88 0 0 1-86.755556 36.181333z"
          fill="#333333"
          p-id="7598"
        ></path>
      </svg>
      {children}
    </a>
  );
}

export default YoLink;
