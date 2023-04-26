export default function MovieDetail() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log("params", params);
  const res = params.map((inde) => {
    inde;
  });
  return (
    <>
      <main className={styles.main}>
        <h1>See more</h1>
      </main>
    </>
  );
}
