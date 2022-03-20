import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      <h1>First post</h1>
      <h2>
        <Link href='/'>홈으로 돌아가기</Link>
      </h2>
    </Layout>
  );
};
