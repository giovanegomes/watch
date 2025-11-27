import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-4 md:mx-20 my-10">
      <hr className="border-[#3D3D3F]" />
      <div className="w-full flex flex-col md:flex-row justify-between my-10 gap-10 md:gap-0">
        <div className="flex-1 md:flex-[2] text-sm leading-relaxed md:pr-10">
          <span>
            Check the Parental Guidance Rating © 2024 WarnerMedia Direct Latin
            America, LLC. All rights reserved. Max is used under license.
            <br />
            © 2024 Globo Comunicação e Participações S.A. All rights reserved.
            Big Brother Brasil is used under license. The trademarks GLOBO®, TV
            GLOBO®, GLOBO NEWS®, CANAL BRASIL®, SPORTV®, MULTISHOW®, OFF®, GNT®,
            BIS®, GLOOBINHO®, GLOOB®, VIVA®, MODO VIAGEM®, PREMIERE®, and
            COMBATE® are properties of Globo Comunicação e Participações S.A.
            <br />
            © 2024 NBCUniversal. All rights reserved. The Universal, Studio
            Universal, and USA Network trademarks are properties of
            NBCUniversal.
            <br />
            © 2024 Telecine Programação De Filmes Ltda. All rights reserved. The
            registered trademarks TELECINE® and MEGAPIX® are properties of
            Telecine.
            <br />
            Paramount+ © 2024 Paramount. All rights reserved.
          </span>
        </div>
        <div className="flex flex-col md:items-end items-center justify-around md:flex-1">
          <div>
            <Image src="/logo.svg" alt="Logo" width={160} height={46} />
          </div>
          <p>© 2024 Watch Brasil. All rights reserved</p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between my-10 gap-8">
        <div className="flex flex-row items-center gap-6">
          <Image
            src="/images/icon-youtube.png"
            alt="Youtube"
            width={34}
            height={24}
          />
          <Image
            src="/images/icon-linkedin.png"
            alt="LinkedIn"
            width={23}
            height={24}
          />
          <Image
            src="/images/icon-instagram.png"
            alt="Instagram"
            width={24}
            height={24}
          />
          <Image
            src="/images/icon-facebook.png"
            alt="Facebook"
            width={11}
            height={24}
          />
          <Image
            src="/images/icon-tik-tok.png"
            alt="Tok"
            width={20}
            height={24}
          />
          <Image
            src="/images/icon-twiter.png"
            alt="Twitter"
            width={27}
            height={24}
          />
        </div>
        <div className="flex flex-row gap-4 flex-wrap justify-center">
          <Image
            src="/images/google.png"
            alt="Google Play"
            width={140}
            height={44}
          />
          <Image
            src="/images/apple-download.png"
            alt="Apple"
            width={130}
            height={40}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
        <p className="font-medium cursor-pointer">About Labs Festival</p>
        <p className="font-medium cursor-pointer">Terms of use and privacy</p>
        <p className="font-medium cursor-pointer">Send feedback</p>
      </div>
    </footer>
  );
}
