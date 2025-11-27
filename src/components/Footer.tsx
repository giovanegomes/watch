import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-20 my-10">
      <hr className="border-[#3D3D3F]" />
      <div className="w-full flex flex-row justify-between my-10">
        <div className="flex-7">
          <span>
            heck the Parental Guidance Rating © 2024 WarnerMedia Direct Latin
            America, LLC. All rights reserved. Max is used under license.
            <br />© 2024 Globo Comunicação e Participações S.A. All rights
            reserved. Big Brother Brasil is used under license. The trademarks
            GLOBO®, TV GLOBO®, GLOBO NEWS®, CANAL BRASIL®, SPORTV®, MULTISHOW®,
            OFF®, GNT®, BIS®, GLOOBINHO®, GLOOB®, VIVA®, MODO VIAGEM®,
            PREMIERE®, and COMBATE® are properties of Globo Comunicação e
            Participações S.A.
            <br />© 2024 NBCUniversal. All rights reserved. The Universal,
            Studio Universal, and USA Network trademarks are properties of
            NBCUniversal.
            <br />© 2024 Telecine Programação De Filmes Ltda. All rights
            reserved. The registered trademarks TELECINE® and MEGAPIX® are
            properties of Telecine Programação De Filmes Ltda.Paramount+ © 2024
            Paramount. All rights reserved.
          </span>
        </div>
        <div className="flex-3 flex flex-col items-end justify-around">
          <div>
            <Image src="/logo.svg" alt="Logo" width={160} height={46} />
          </div>
          <div>
            <p>© 2024 Watch Brasil. All rights reserved</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row my-10">
        <div className="flex flex-1 items-center gap-8">
          <Image
            src="/images/icon-youtube.png"
            alt="Logo"
            width={34}
            height={24}
          />
          <Image
            src="/images/icon-linkedin.png"
            alt="Logo"
            width={23}
            height={24}
          />
          <Image
            src="/images/icon-instagram.png"
            alt="Logo"
            width={24}
            height={24}
          />
          <Image
            src="/images/icon-facebook.png"
            alt="Logo"
            width={11}
            height={24}
          />
          <Image
            src="/images/icon-tik-tok.png"
            alt="Logo"
            width={20}
            height={24}
          />
          <Image
            src="/images/icon-twiter.png"
            alt="Logo"
            width={27}
            height={24}
          />
        </div>
        <div className="flex items-center flex-row gap-5">
          <Image src="/images/google.png" alt="Logo" width={150} height={44} />
          <Image
            src="/images/apple-download.png"
            alt="Logo"
            width={135}
            height={40}
          />
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <p className="font-medium">About Labs Festival</p>
        <p className="font-medium">Terms of use and privacy</p>
        <p className="font-medium">Send feedback</p>
      </div>
    </footer>
  );
}
