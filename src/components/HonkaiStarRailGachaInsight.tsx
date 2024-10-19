import useHonkaiStarRailGhachaStore from "@/store/honkaiStarRailGachaStore";
import FilePicker from "./FilePicker";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

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
        <div className="absolute left-0 top-0 flex h-full w-full">
          <div className="flex-1"></div>
          <TableContainer
            bgColor={"white"}
            className="my-16 mr-16 flex-[2] rounded-lg"
            overflowY={"auto"}
          >
            <Table className="">
              <Thead className="sticky top-0 bg-white">
                <Tr>
                  <Th>名称</Th>
                  <Th>类型</Th>
                  <Th>稀有度</Th>
                </Tr>
              </Thead>
              <Tbody>
                {characters.map((character) => (
                  <Tr
                    key={character["id"]}
                    color={"white"}
                    bgColor={
                      character["rank_type"] === "5"
                        ? "gold"
                        : character["rank_type"] === "4"
                          ? "purple"
                          : "blue"
                    }
                  >
                    <Td>{character["name"]}</Td>
                    <Td>{character["item_type"]}</Td>
                    <Td>{character["rank_type"]}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <FilePicker />
      )}
    </div>
  );
};

export default HonkaiStarRailGachaInsight;
