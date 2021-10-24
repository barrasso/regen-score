import { useQuery, gql } from "@apollo/client";

interface RegenScoreProps {
  address: string;
}

const GET_USER_REGEN_SCORE = gql`
  query TODOSPECIFYQUERY($language: String!) {
    greeting(language: $language) {
      message
    }
  }
`;

export default function RegenScore({ address }: RegenScoreProps) {
  const { loading, error, data } = useQuery(GET_USER_REGEN_SCORE, {
    variables: { address },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>The fuck happened here? {error.message}</div>;

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
