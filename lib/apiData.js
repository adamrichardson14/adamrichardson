import { gql, GraphQLClient } from "graphql-request";

const endpoint = "https://api-eu-central-1.graphcms.com/v2/ckr39y4hu0fzb01z1gj0jfev7/master";

const graphQLClient = new GraphQLClient(endpoint);

export const getImages = async () => {
  const query = gql`
    {
      imageGalleries {
        title
        image {
          height
          width
          id
          createdAt
          url
        }
      }
    }
  `;
  return await graphQLClient.request(query);
};
