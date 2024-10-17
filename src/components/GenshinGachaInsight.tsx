import FilePicker from "./FilePicker";
import genshinIcon from "@/assets/icon/genshin-icon.png";

const GenshinGachaInsight = () => {
  return (
    <div
      className="relative flex h-screen items-center justify-center p-4"
      style={{
        backgroundImage:
          "url(https://act-webstatic.mihoyo.com/puzzle/hk4e/pz_YvJfNJEi5F/resource/puzzle/2024/09/13/6dd8b2ce6e4e330387bbaae9b47a9d9a_4260520416375368653.png?x-oss-process=image/format,webp/quality,Q_90)",
      }}
    >
      <img src={genshinIcon} className="absolute left-4 top-4 w-24" />
      {/* <h1 className="text-3xl font-bold">原神抽卡统计</h1> */}
      <FilePicker />
    </div>
  );
};

export default GenshinGachaInsight;
