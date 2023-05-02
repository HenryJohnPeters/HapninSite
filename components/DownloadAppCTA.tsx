import React from "react";
import Image from "next/image";
import Link from "next/link";

import googleDownload from "../public/google-badge.svg";
import iosDownload from "../public/app-store-badge.svg";

const DownloadAppCTA = ({style}: {style: string}) => {
  return (
    <div className={style}>
      <button>
        <Link href="https://play.google.com/">
          <Image src={googleDownload} alt="google download" />
        </Link>
      </button>
      <button>
        <Link href="https://apps.apple.com/">
          <Image src={iosDownload} alt="app store download" className="ml-2" />
        </Link>
      </button>
    </div>
  );
};

export default DownloadAppCTA;
