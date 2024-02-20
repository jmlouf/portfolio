export function Download({ href, fileName, displayName, type }) {
  return (
    <a href={href} type={type} download={fileName}>
      {displayName}
    </a>
  );
}
