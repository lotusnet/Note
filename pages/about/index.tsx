import type { VFC } from 'react';
import { Layout } from '../components/layout/Layout';

export const About : VFC = () =>
{
  return (
    <>
      <Layout title={`ABOUT`}>
      <h1>About</h1>
      </Layout>
    </>
  )
}

export default About