function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-100 text-base-content p-4">
      <aside>
        <p className="text-base">
          <span>Hosted on </span>
          <a
            className="link link-hover"
            target="_blank"
            href="https://github.com/vanfossen/qr-gen"
          >
            GitHub
          </a>
          <span> with a </span>
          <a
            className="link link-hover"
            target="_blank"
            href="https://github.com/vanfossen/qr-gen/blob/main/LICENSE"
          >
            MIT license
          </a>
          <span>.</span>
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
