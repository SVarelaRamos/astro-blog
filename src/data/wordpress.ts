const WP_GRAPHQL_ENDPOINT = import.meta.env.WP_GRAPHQL_ENDPOINT;
const WP_GRAPHQL_USERNAME = import.meta.env.WP_GRAPHQL_USERNAME;
const WP_GRAPHQL_PASSWORD = import.meta.env.WP_GRAPHQL_PASSWORD;

interface WPGraphQLParams {
  query: string;
  variables?: object;
}

export async function wpquery({ query, variables = {} }: WPGraphQLParams) {
  const res = await fetch(WP_GRAPHQL_ENDPOINT, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + btoa(WP_GRAPHQL_USERNAME + ":" + WP_GRAPHQL_PASSWORD),
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    console.error(res);
    return {};
  }

  const { data } = await res.json();
  return data;
}
