import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import banner from "../../assets/bannerImage.png";
import batman from "../../assets/batman.png";
import dunkirk from "../../assets/dunkirk.png";
import spiderman from "../../assets/spiderMan.png";
import strangerThings from "../../assets/strangerThings.png";
import tomatoe from "../../assets/tomatoe.png";
import imdbTag from "../../assets/imdbTag.png";
import style from "./movieList.module.css";

import { DM_Sans } from "next/font/google";

const dmSansHeader = DM_Sans({
  subsets: ["latin"],
  weight: "700",
});

const dmSansText = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});

export default function MovieDetail() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log("params", params);
  const res = params.map((inde) => {
    inde;
  });
  return (
    <>
      <main>
        <div>
          <Image src={banner} alt="banner image" Width={1440} Height={600} />
          <div className={style.bannerInfo}>
            <div className={style.bannerHeaderWrap}>
              <h4
                className={`${dmSansHeader.className} ${style["bannerHeader"]}`}
              >
                John Wick 3 : Parabellum
              </h4>
            </div>
            <div>
              <Image src={imdbTag} alt="imdb" width={101} height={17} />
              <Image src={tomatoe} alt="imdb" width={49} height={17} />
            </div>
            <div className={`${style["bannerDescriptionWrap"]}`}>
              <p
                className={` ${style["bannerDescription"]} ${dmSansText.className}`}
              >
                John Wick is on the run after killing a member of the
                international assassins&apos; guild, and with a $14 million
                price tag on his head, he is the target of hit men and women
                everywhere.
              </p>
            </div>
            <div className={style.buttonWrap}>
              <button
                className={`${dmSansHeader.className} ${style.bannerButton}`}
              >
                Watch trailer
              </button>
            </div>
          </div>
        </div>
        <div className={style.featuredContainer}>
          <h6 className={style.featuredMovieHeading}>Featured Movie</h6>
          <Link href="/seeMore">See more</Link>
        </div>
        <section className={style.movieListContainer}>
          <div>
            <Image src={batman} alt="Bat man" width={250} height={370} />
          </div>
          <div>
            <Image
              src={strangerThings}
              alt="Stranger Things"
              width={250}
              height={370}
            />
          </div>
          <div>
            <Image src={spiderman} alt="spider man" width={250} height={370} />
          </div>
          <div>
            <Image src={dunkirk} alt="dunkirk" width={250} height={370} />
          </div>
        </section>
      </main>
    </>
  );
}
