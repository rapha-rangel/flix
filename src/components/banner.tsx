import Carousel from "./carousel";

interface BannerProps{
  trendingAll: any
}
export default function Banner({trendingAll}:BannerProps) {
  return(
    <section className="bg-[rgba(12,12,12,1)]">
      <Carousel
        trendingAll={trendingAll}
      />
    </section>
  )
}