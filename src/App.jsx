import { useEffect, useState } from 'react';

const memories = [
  ['', ' ilk slm ?????', 'He he yanlış kişi yaa 24 Ocak'],
  ['🍰', 'İlk Başbaşa Takılmamız', 'Dondurma ismarladım konuşmadın çok şeker bişeydin 24 NİSAN'],
  ['🛍️', 'İlk Bişi Diyon MU?', 'Aşkuş Olduğumuz Gün BUndan tam 6 ay öncesi 1 Mayıs'],
  ['☕', 'İLK Öpücük', 'Tam olarak ilk değil ama kayıtlı olarak ilk 2 Haziran'],
  ['😂', 'İlk Sarılma', 'Fotosu yok ama çok özel 4 Mayıs'],
  ['🤍', ' İlk Altı ayımız', 'Uzun Bİr Bakit geçti üstünden Bugün Çok özel, iyiki 1 kasım '],
];
const wishes = [
  ['🍰', 'Kendi Başımıza Gezi Yapmak', 'tetz gibi gezi ama sadece ikimiz okul olmadan eğleniceğimiz bir yeree'],
  ['🎹', 'Beraber bir piyano şarkısını tamamen öğrenip prive atmak', 'Birlikte seçelim; Patlayınca da güleriz.'],
  ['🎨', 'Birlikte resim yapmak', 'Güzel olup olmaması önemli değil(benimki Terörist olur zaten); yan yana boyayalım.'],
  ['🛍️', 'Koçtaş’ta amaçsızca gezmek', 'Bir şey almadan girip, bir sürü gelecek planıyla çıkalım.'],
  ['🌅', 'Gün batımını izlemek', 'Telefonları bırakıp sadece o anı paylaşalım.'],
  ['📸', 'Fotoğraf günü', 'Altı ay sonraki bize küçük bir albüm bırakalım.'],
];
const compliments = [
  'Gülüşün, en sıradan günü bile güzelleştiriyor.', 'Yanında kendim gibi olmak çok güzel.',
  'Sen benim en sevdiğim insansın,Huzurumsun, evimsin.', 'Seni dinlemek de, sana anlatmak da çok iyi geliyor.',
  'İyi ki yollarımız kesişmiş.', 'Seninle Sadece Yanyana durmak içimi ısıtıyor.',
  'Bakışınla bile günümü güzelleştirebiliyorsun.', 'Bana verdiğin huzur çok kıymetli.',
  'Sen varken küçük şeyler bile anıya dönüşüyor.', 'Seni her geçen gün daha çok seviyorum.','Sen gülünce Güneş Seni kıskanıyorr'
];
const quiz = [
  ['Birlikteyken zaman en çok ne yaparken uçuyor?', ['Bahçede turlarken', 'Haftasonları Buluşurken', 'Maloşca gece sohbeti yaparken'], 'Seninle zamanın nasıl geçtiğini hiç anlamıyorum. ♡'],
  ['Beraber yediğimiz şeylerden aklımızda kalan?', ['Pidem', 'Dondurma', 'Brownie'], 'YAA ÇEKKMEE DFSDPFODSFPS mwahh'],
  ['ilk nasıl tanıştık', ['Sen slm yazdın', 'Ben Tabak Attım', 'Dondurma ısmarladım'], 'Tanıştığımız güne bile aşığım'],
  ['Favori Buluşmamız Hangisi', ['Taksim stüdyo öncesi', 'Tetz', 'özdilek pidem'], 'Senin Yanında olduğun her an en güzelli'],
  ['En sevdiğim kişi kim?', ['Eda', 'Eda', 'Eda'], 'Sürpriz cevap: yine Eda! Ay parçam, tabii ki sensin. 💗'],
];
const reasons = ['Gülüşün', 'Sesin', 'Şefkatin', 'Mizahın', 'Sevgin', 'Huzurun', 'Enerjin', 'Sen'];
const reasonNotes = [
  'Gülüşün, Ay ve Güneşi Kıskandırıyor', 'Sevimli Sevimli Konuşman',
  'Yanında kendim gibi olabilmem.', 'Her şeyi beraber komik hale getirmemiz.',
  'Değerli Hissettirmen', 'Bana “evim” gibi hissettiren yanın.',
  'Küçük şeyleri bile anıya çevirmemiz.', 'Sevginin bazen nedeni olmaz. Sadece sen olduğun için.',
];
const dateIdeas = ['Herhangi bir Yeri keşif turu 🍰', 'Koçtaş’ta hayalimizdeki evi döşeme 🛋️', 'Piyano başında bize ait bir şarkı 🎹', 'Birlikte resim yapıp kahkaha atma 🎨', 'Gün batımı ve uzun uzun sohbet 🌅', 'Birlikte fotoğraf çekip mini albüm yapma 📸', 'Atıştırmalıklı film gecesi 🍿'];
const feelings = [
  'Seninle öğrendim ki mutluluk bazen yanyana oturup havadan sudan konuşmakmış.',
  'Yanımdayken dünya biraz daha yumuşak, günler biraz daha aydınlık geliyor.',
  'Altı ayın en güzel tarafı takvim değil; her sayfasında senin olman.',
  'Birlikte kurduğumuz küçücük hayaller bile içimde kocaman bir yuva kuruyor.',
  'Sana baktığımda yalnızca bugünümü değil, birlikte yaşayacağımız güzel yarınları da görüyorum.',
  'Ay parçam, iyi ki varsın. Kalbimdeki tek yer senin.',
];
const giggles = [
  ['Birlikteyken En Çok Kim Konuşur', ['Eda 😇', 'Yağız 😇', 'İkimiz de 🤭'], ['Masumiyetine inandık Eda… Ben daha çok konuşuyom ama senin konuşman cennet gibi çok güzel 😄', 'Yağız, Sus Artık! 😌', 'En dürüst cevap: paylaşmak diye bir şey var 😄']],
  ['Birlikte bir gün kaybolsak ne olur?', ['Haritaya bakarız', 'Yemek Yeri ararız', 'Rastgele Yürürüz bir şekilde buluruz'], ['Haritayı ikimiz de ters tutarız. Klasik biz 😄', 'Öncelikler belli, ballım 🍰', 'Birlikteysek kaybolmak bile güzel 💗']],
  ['Koçtaş “sadece bakmaya” girince ne kadar kalırız?', ['Beş dakika', 'Bir saat', 'Hayalimizdeki evi kurana kadar'], ['Tatlı bir iyimserlik 😇', 'Rafların arasında küçük bir ömür geçer 😄', 'Çıkarkende yalandan bant alırız hihihi']],
];

const steps = ['Başlangıç', 'Mini test', 'İlklerimiz', 'One Day,Day One', 'Sende sevdiğim şeyler', 'Randevu çekilişi', 'Birlikte gülümse', 'Kalbimden sana', 'Mektubum', 'Spotify'];
const garden = ['🌸', '♡', '🌼', '💗', '✿', '💛', '🌷', '♡', '🌺', '💖', '🌼', '✿', '💕', '🌸', '💛', '♡', '🌷', '💗', '🌺', '✿', '💖', '🌼', '💕', '♡'];

function GlassCard({ item, kind = 'done', onClick }) {
  return <button className={`memory-card ${kind}`} onClick={onClick}><span className="card-emoji">{item[0]}</span><strong>{item[1]}</strong><span>{kind === 'done' ? 'Anıyı aç ♡' : 'Birlikte yapalım ♡'}</span></button>;
}

function App() {
  const [step, setStep] = useState(0);
  const [question, setQuestion] = useState(0);
  const [quizMessage, setQuizMessage] = useState('');
  const [quizDone, setQuizDone] = useState(false);
  const [modal, setModal] = useState(null);
  const [envelope, setEnvelope] = useState(false);
  const [datePick, setDatePick] = useState('Bugünün küçük macerasını seçmeye hazır mısın?');
  const [giggleIndex, setGiggleIndex] = useState(0);
  const [giggleMessage, setGiggleMessage] = useState('');
  const [feelingIndex, setFeelingIndex] = useState(-1);
  const [letterOpen, setLetterOpen] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (step !== 1) { setEnvelope(false); return undefined; }
    const timer = window.setTimeout(() => setEnvelope(true), 4300);
    return () => window.clearTimeout(timer);
  }, [step]);

  function hearts(amount = 12) {
    const batch = Array.from({ length: amount }, (_, i) => ({ id: `${Date.now()}-${Math.random()}`, emoji: ['♡', '💗', '✨', '🌸', '💛'][i % 5], left: Math.random() * 100, delay: Math.random() * 0.7 }));
    setParticles((old) => [...old, ...batch]);
    window.setTimeout(() => setParticles((old) => old.filter((p) => !batch.some((b) => b.id === p.id))), 4600);
  }
  function go(next) {
    const target = Math.max(0, Math.min(steps.length - 1, next));
    setStep(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    hearts(target === steps.length - 1 ? 30 : 8);
  }
  function answerQuiz() {
    if (quizMessage || quizDone) return;
    setQuizMessage(quiz[question][2]);
    window.setTimeout(() => {
      if (question < quiz.length - 1) setQuestion((n) => n + 1);
      else { setQuizDone(true); setQuizMessage('Verdiğin Her cevap doğruydu. Çünkü biz ikimiz olunca doğru yanlışın önemi yok sadece biz varız!!'); }
      if (question < quiz.length - 1) setQuizMessage('');
    }, 1450);
  }
  function showEnvelope() {
    setEnvelope(false);
    setModal(['💌', 'Eda’ma, ay parçam…', `${compliments[Math.floor(Math.random() * compliments.length)]} — Yağız ♡`]);
  }
  function chooseDate() {
    setDatePick('Bir saniye… bize en çok yakışanı seçiyorum ✨');
    window.setTimeout(() => { setDatePick(dateIdeas[Math.floor(Math.random() * dateIdeas.length)]); hearts(15); }, 900);
  }

  return <div className="app-shell">
    <div className="garden" aria-hidden="true">{garden.map((flower, i) => <span key={i} style={{ left: `${(i * 41 + 7) % 97}%`, top: `${(i * 67 + 4) % 96}%`, fontSize: `${19 + (i % 4) * 8}px`, animationDelay: `${(i % 7) * -0.8}s` }}>{flower}</span>)}</div>
    <div className="heart-rain" aria-hidden="true">{particles.map((p) => <span key={p.id} className="confetti" style={{ left: `${p.left}vw`, animationDelay: `${p.delay}s` }}>{p.emoji}</span>)}</div>

    {step === 0 && <header className="hero"><div className="hero-inner"><div className="eyebrow">Eda & Yağız'ın minik dünyası ♡</div><h1>İyi ki<br />biz olmuşuz.</h1><p>Ay parçam, ballım, meleğim, Edam…<br />Bu tatlı köşe bizim 6 ayımıza. ♡</p><button className="button" onClick={() => go(1)}>Aç bakalım, meleğim →</button><div className="tiny">Her adımda sana göre bir sürpriz var ✨</div></div></header>}

    {step > 0 && step < 9 && <main className={`step-page step-${step}`} key={step}>
      {step === 1 && <section className="section active" id="quiz"><div className="section-head"><div className="eyebrow">bir bakalım ne kadar hatırlıyoruz</div><h2>Bizim mini testimiz</h2><p>Doğru cevap şart değil; sen zaten benim favorimsin. ♡</p></div><div className="quiz"><div className="eyebrow">soru {Math.min(question + 1, quiz.length)} / {quiz.length}</div><h3>{quiz[question][0]}</h3><div className="answers">{quiz[question][1].map((a, i) => <button key={i} onClick={answerQuiz} disabled={quizDone}>{a}</button>)}</div><div className="result">{quizMessage}</div></div></section>}
      {step === 2 && <section className="section active" id="memories"><div className="section-head"><div className="eyebrow">şimdiye kadar biriktirdiklerimiz</div><h2>Bizim İlklerimiz</h2><p>Kartlara dokun; her birinde sana sakladığım küçük bir not var.</p></div><div className="memory-grid">{memories.map((m) => <GlassCard key={m[1]} item={m} onClick={() => setModal(m)} />)}</div></section>}
      {step === 3 && <section className="section active" id="future"><div className="section-head"><div className="eyebrow">geçmişimize bir kalp, geleceğimize altı dilek</div><h2>Yaptıklarımız & yapacaklarımız</h2><p>Şimdiden yaşadıklarımız çok güzel; sıradaki güzellikler de bizi bekliyor.</p></div><h3 className="subhead">✓ Biz yaptık</h3><div className="memory-grid">{memories.map((m) => <GlassCard key={m[1]} item={m} />)}</div><h3 className="subhead">♡ Sırada birlikte yapacaklarımız</h3><div className="memory-grid">{wishes.map((w) => <GlassCard key={w[1]} item={w} kind="todo" onClick={() => setModal(w)} />)}</div></section>}
      {step === 4 && <section className="section active" id="reasons"><div className="section-head"><div className="eyebrow">küçük bir liste, kocaman bir his</div><h2>Sende sevdiğim şeyler</h2><p>Bir tanesine dokun; içinden başka bir not çıksın.</p></div><div className="reason-wall">{reasons.map((r, i) => <button key={r} className="reason-chip" onClick={() => setModal(['💗', `Sende sevdiğim #${i + 1}`, reasonNotes[i]])}>{r}</button>)}</div><div className="reason-caption">Liste burada bitiyor; seni sevmem için sebeplerim bitmiyor. ♡</div></section>}
      {step === 5 && <section className="section active" id="surprise"><div className="section-head"><div className="eyebrow">şansına ne çıkacak?</div><h2>Yağız & Eda randevu çekilişi</h2><p>Düğmeye bas, sıradaki mini maceramız rastgele seçilsin. İtiraz hakkı sadece waffle seçeneğinde. 🍰</p></div><div className="draw-card"><div className="draw-spark">✦ ✧ ✦</div><div className="date-pick">{datePick}</div><button className="button" onClick={chooseDate}>Bizim için seç! ♡</button><div className="draw-spark">♡ ✧ ♡</div></div></section>}
      {step === 6 && <section className="section active" id="giggles"><div className="section-head"><div className="eyebrow">ciddi bir araştırma sonucu…</div><h2>Bizim minik saçmalık testimiz</h2><p>Bilim insanları değil, kalbim hazırladı. Cevaplar tamamen taraflı olabilir. 😌</p></div><div className="giggle-stage"><div className="giggle-sticker">🍓</div><div className="giggle-question">{giggles[giggleIndex][0]}</div><div className="giggle-answers">{giggles[giggleIndex][1].map((a, i) => <button key={a} onClick={() => { setGiggleMessage(giggles[giggleIndex][2][i]); hearts(6); }}>{a}</button>)}</div><div className="giggle-result">{giggleMessage}</div><button className="button" onClick={() => { setGiggleIndex((i) => (i + 1) % giggles.length); setGiggleMessage(''); }}>Bir soru daha →</button></div></section>}
      {step === 7 && <section className="section active" id="feelings"><div className="section-head"><div className="eyebrow">biraz yavaşlayalım, kalbimden sana</div><h2>Altı ayın bende bıraktığı</h2><p>Kalbe dokun; sana içimden geçen küçük bir cümle gelsin.</p></div><div className="feeling-scene"><div className="feeling-moon">🌙</div><div className="feeling-text">{feelingIndex < 0 ? 'Hazır olduğunda kalbe dokun…' : feelings[feelingIndex]}</div><button className="heart-button" onClick={() => { setFeelingIndex((i) => (i + 1) % feelings.length); hearts(12); }}>♡</button><div className="feeling-count">kalbimde saklı 6 cümle</div></div></section>}
      {step === 8 && <section className="section active" id="letter"><div className="section-head"><div className="eyebrow">son bir şey, sadece sana</div><h2>Eda’ma mektubum</h2><p>Zarfı aç, ballım. Bu satırlar sana. 💌</p></div><div className="letter-wrap">{!letterOpen && <button className="letter-seal" onClick={() => { setLetterOpen(true); hearts(26); }}>💌<span>mektubu aç</span></button>}<article className={`love-letter ${letterOpen ? 'open' : ''}`}><div className="letter-flower">🌷</div><h3>Ay parçam, Meleğim, Edam…</h3><p>Altı ay önce başlayan hikâyemizin bugün bu kadar güzel bir yere geleceğini bilmiyordum. Seninle geçirdiğim her gün, dönüp gülümseyerek hatırlayacağım yeni bir anı oluyor.

Beraber yediğimiz Dondurma Brownie Waffle Pide Dürüm Biskuvi,Müzikte Bahçede Parkta Avmde geçirdiğimiz güzel anılar, En  küçücük şeylere birlikte gülmemiz… Hepsi benim için çok kıymetli. En sevdiğim şey, bütün bunları seninle yaşıyor olmak.

Yanımda olduğun, beni olduğum gibi sevdiğin ve hayatımı güzelleştirdiğin için teşekkür ederim. Önümüzde keşfedeceğimiz daha çok yer, tutacağımız daha çok dilek ve biriktireceğimiz çokça güzel anı var.

İyiki Varsın,İyi ki benimlesin,İyiki benimsin ballım. Altıncı ayımız kutlu olsun. Nice 6 yıllara 60 yıllara, Seni çok Seviyorum. ♡</p><div className="letter-sign">Sonsuz sevgimle,<br /><b>Yağız</b> ♡</div></article></div></section>}
    </main>}

    {step === 9 && <main className="step-page step-9"><section className="section active" id="final"><div className="spotify"><div className="eyebrow">son sürpriz ♡</div><h2>Bizim şarkılarımız</h2><p>Şimdi playlistimizi aç; her şarkıda aklım sende olsun, Edam. 🎧</p><a className="button" href="https://open.spotify.com/playlist/3Urfr4CdZHKwIXgiIadAl1?si=tdn-hjeTTYSAIgq9nl3THw&utm_source=copy-link&nd=1&dlsi=7c6dcc854da34db9" target="_blank" rel="noreferrer">Spotify playlistimizi aç ↗</a><div className="spotify-hearts">♡ ✦ ♡ ✿ ♡</div></div></section></main>}

    <button className={`pop-envelope ${envelope ? 'show' : ''}`} aria-label="Eda için gelen mektubu aç" onClick={showEnvelope}>💌</button>
    {modal && <div className="modal show" onClick={(e) => e.target === e.currentTarget && setModal(null)}><div className="modalbox"><div className="big">{modal[0]}</div><h2>{modal[1]}</h2><p>{modal[2]}</p><button className="close" onClick={() => setModal(null)}>Kalbime kaydettim ♡</button></div></div>}
    <div className="wizard"><div className="wizard-title">{steps[step]}</div><div className="wizard-inner"><button className="prev" disabled={step === 0} onClick={() => go(step - 1)}>← Önceki</button><div className="dots">{steps.map((s, i) => <span key={s} className={`dot ${i === step ? 'on' : ''}`} />)}</div>{step < 9 ? <button className="next" onClick={() => go(step + 1)}>{step === 8 ? 'Spotify sürprizi →' : 'Sonraki →'}</button> : <button className="next" onClick={() => go(0)}>Baştan sar ↻</button>}</div></div>
  </div>;
}

export default App;
