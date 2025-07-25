'use client';

import Head from 'next/head';
import SupportChild from '../../components/pages/sponsor/SupportChild';

export default function SupportChildPage() {
  return (
    <>
      <Head>
        <title>Support a Child's Education – Transform Lives Through Education | VBFA</title>
        <meta
          name="description"
          content="Support a child's education and help unlock a brighter future. Your donation empowers underprivileged children in India with access to quality education and growth opportunities."
        />
        <meta
          name="keywords"
          content="Support a child's education, Sponsor child education India, Donate for student education, Education for underprivileged children India, Transform lives through education, Non-profit child education India, Education charity India, Fund rural education India, Empower children through education, Education sponsorship India"
        />
      </Head>
      <SupportChild />
    </>
  );
}
