import { useQuery, gql } from "@apollo/client";

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

export default function RegenScore({ address }: RegenScoreProps) {
  const { loading, error, data } = useQuery(GET_USER_REGEN_SCORE, {
    variables: { address },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>The fuck happened here? {error.message}</div>;

  console.log(data)

  // Do the computation on the data

  return (
    <div>
      <ul>
        <li>Vitalik</li>
        <li>Others</li>
      </ul>
      {data}
    </div>
  );
}
