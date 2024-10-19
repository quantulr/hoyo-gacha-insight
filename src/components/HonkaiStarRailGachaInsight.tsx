import useHonkaiStarRailGhachaStore from "@/store/honkaiStarRailGachaStore";
import FilePicker from "./FilePicker";

const HonkaiStarRailGachaInsight = () => {
  const characters = useHonkaiStarRailGhachaStore((state) => state.characters);
  return (
    <div className="relative flex h-screen items-center justify-center p-2">
      <div
        className="blur-background absolute left-0 top-0 h-full w-full bg-center blur-lg"
        style={{
          backgroundImage:
            "url(https://act-upload.mihoyo.com/sr-wiki/2023/11/16/279865110/6739f3ca591673766c8cf6cc629d6c38_3636882456019169228.png)",
        }}
      ></div>
      <img
        src="https://webstatic.mihoyo.com/upload/event/2022/07/29/c31dd1d732913e4ab5f3d4f03346a706_9097205533659112586.png"
        className="absolute left-4 top-4 z-20 w-32"
      />
      {characters.length > 0 ? (
        <ul className="ab absolute left-0 top-0 z-30 h-full w-full overflow-y-scroll p-8">
          {characters.map((el) => (
            <li key={el.id}>
              {el.name}---{el.item_type}---{el.rank_type}
            </li>
          ))}
        </ul>
      ) : (
        <FilePicker />
      )}
    </div>
  );
};

export default HonkaiStarRailGachaInsight;
