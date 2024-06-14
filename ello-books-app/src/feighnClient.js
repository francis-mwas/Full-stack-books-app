import {gql, request} from 'graphql-request';

const APIUrl =
    'http://localhost:4000/';

const fetchBooks = async () => {
    const query = gql`
   query Books {
      books {
        author
        coverPhotoURL
        readingLevel
        title
      }
}
  `;
    return await request(APIUrl, query);
};

export default {
    fetchBooks,
};
