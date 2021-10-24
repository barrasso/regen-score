import { useQuery, gql } from "@apollo/client";
import { Text } from "@chakra-ui/layout";
import RegenScoreItem from "./RegenScoreItem";

interface RegenScoreProps {
  address: string;
}

const GET_USER_REGEN_SCORE = gql`
  query Test {
    erc20Contracts {
      name
      id
      symbol
    }
    erc20Balances {
      id
      value
      account {
        id
      }
    }
  }
`;

export default function RegenScoreList({ address }: RegenScoreProps) {
  const { loading, error, data } = useQuery(GET_USER_REGEN_SCORE, {
    variables: { address },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>The fuck happened here? {error.message}</Text>;

  console.log(data)

  return (
    <div>
      <ul>
        <RegenScoreItem name="Vitalik" isWhale={true} />
        {/* iterate over data with data.map(x => <RegenScoreItem name={x.address} isWhale={x.isWhale} /> */}
        {data}
      </ul>
    </div>
  );
}
