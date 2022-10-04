import React from 'react';
import 'antd/dist/antd.min.css'
import { Layout } from 'antd';
import { useQuery, gql } from '@apollo/client'

const { Header, Content } = Layout;

const GET_SONGS = gql`
  query getAllSongs {
    songs {
      title
      author
    }
  }
`

function DisplaySongCards() {
  const { loading, error, data } = useQuery(GET_SONGS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.songs.map(({ title, author }) => (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  ));
}

export default function App() {
  return (
    <div>
      <Layout>
        <Header>
          <div>
          <h1 style={{ color: 'white' }}>⭐ Songs camp 🚀</h1>
          </div>
        </Header>
        <Content>
          <DisplaySongCards />
        </Content>
      </Layout>
    </div>
  )
}
