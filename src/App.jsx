import { useState } from 'react';

const navItems = [
  { href: '#forge', label: 'Направления' },
  { href: '#method', label: 'Метод' },
  { href: '#showreel', label: 'Шоурил' },
  { href: '#contact', label: 'Контакт' },
];

const forgeItems = [
  {
    number: '01',
    title: 'Дизайн боссов',
    text: 'Придумываем противников, которых легко считать в кадре: силуэт, материал, оружие, фазы и главное ощущение угрозы.',
    image: '/media/forge-boss-design.png',
    alt: 'Концепт-лист босса с рогатым темным персонажем, вариантами силуэта, масками и материалами',
  },
  {
    number: '02',
    title: 'Персонажи для франшизы',
    text: 'Собираем внешний вид героя или антагониста так, чтобы он работал в трейлере, питче, ключевом арте и будущей игре.',
    image: '/media/forge-character-direction.png',
    alt: 'Темный фэнтези персонаж с капюшоном и светящимся посохом в дождливом городе',
  },
  {
    number: '03',
    title: 'Миры и сцены',
    text: 'Помогаем найти визуальный язык локаций: от арены боя до атмосферного кадра, который объясняет правила мира без длинного текста.',
    image: '/media/forge-world-scene.png',
    alt: 'Эпичная фэнтези арена из драконьих костей на горном утесе во время грозы',
  },
];

const processSteps = [
  {
    icon: 'brief',
    title: 'Бриф и референсы',
    text: 'Разбираем жанр, аудиторию, сеттинг и задачу: нужен персонаж для трейлера, питча, вертикального среза или продакшена.',
  },
  {
    icon: 'silhouette',
    title: 'Силуэт босса',
    text: 'Ищем форму, которую видно в маленьком превью: оружие, масса, материал, поведение в кадре.',
  },
  {
    icon: 'combat',
    title: 'Механика боя',
    text: 'Привязываем образ к игровому действию: фазы, атаки, арена и моменты, которые игрок сразу понимает.',
  },
  {
    icon: 'shot',
    title: 'Шот для питча',
    text: 'Готовим кадр или loop, который можно показать издателю, команде или инвестору без лишних объяснений.',
  },
];

const showreelShots = [
  {
    label: 'Появление',
    title: 'Появление босса',
    text: 'Короткий ролик для первого впечатления: кто перед нами, чем он опасен и почему его хочется запомнить.',
    video: '/media/showreel-boss-first.mp4',
  },
  {
    label: 'Бой',
    title: 'Боевая сцена',
    text: 'Фрагмент боевой сцены: арена, атака, реакция окружения и понятная игровая идея.',
    video: '/media/showreel-second-fight.mp4',
  },
  {
    label: 'Мир',
    title: 'Атмосфера мира',
    text: 'Кадр для питча или трейлера: место, настроение, масштаб и визуальные правила будущей игры.',
    video: '/media/showreel-third-world.mp4',
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="play-glyph">
      <path d="M9 7.5v9l7-4.5-7-4.5Z" />
    </svg>
  );
}

function ProcessIcon({ type }) {
  if (type === 'silhouette') {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true" className="process-icon">
        <path d="M20 5c5.5 0 9.5 4.2 9.5 10.2 0 4.3-2.2 8.3-5.6 11.8l-3.9 4-3.9-4c-3.4-3.5-5.6-7.5-5.6-11.8C10.5 9.2 14.5 5 20 5Z" />
        <path d="M15 32h10" />
      </svg>
    );
  }

  if (type === 'combat') {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true" className="process-icon">
        <path d="M8 28 28 8" />
        <path d="m24 8 8 8" />
        <path d="M12 28h8v4h-8z" />
        <path d="M8 14c5 0 9 4 9 9" />
      </svg>
    );
  }

  if (type === 'shot') {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true" className="process-icon">
        <rect x="7" y="10" width="26" height="20" rx="4" />
        <path d="M15 18h10" />
        <path d="m22 15 5 5-5 5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className="process-icon">
      <path d="M11 8h14l4 4v20H11z" />
      <path d="M25 8v6h6" />
      <path d="M15 20h10M15 25h7" />
    </svg>
  );
}

function App() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <main className="site-shell">
      <section className="hero-section" aria-label="Lumen Anvil">
        <video
          className="hero-video"
          src="/media/lumen-anvil-hero.mp4"
          poster="/media/lumen-anvil-hero.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-scrim" />

        <header className={`site-header${isMobileNavOpen ? ' is-nav-open' : ''}`}>
          <div className="nav-pill">
            <a href="#top" className="brand" aria-label="Lumen Anvil" onClick={closeMobileNav}>
              Lumen Anvil
            </a>
            <nav className="nav-links" aria-label="Основная навигация">
              {navItems.slice(0, 3).map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <a className="nav-cta" href="#contact" onClick={closeMobileNav}>
            Контакт
            <ArrowIcon />
          </a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={isMobileNavOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-controls="mobile-menu"
            aria-expanded={isMobileNavOpen}
            onClick={() => setMobileNavOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav
            className="mobile-nav"
            id="mobile-menu"
            aria-label="Мобильная навигация"
            aria-hidden={!isMobileNavOpen}
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMobileNav}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-content" id="top">
          <p className="hero-overline">Студия игровых персонажей и миров</p>
          <h1>БОССЫ. МИРЫ. ЛЕГЕНДЫ.</h1>
          <p className="hero-copy">
            Делаем визуальные якоря для игр: боссов, персонажей, сцены и короткие зацикленные ролики,
            которые помогают продать идею проекта до большого продакшена.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Обсудить проект
              <ArrowIcon />
            </a>
            <a className="secondary-button" href="#showreel">
              <PlayGlyph />
              Смотреть шоурил
            </a>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="intro-grid">
          <div className="intro-copy">
            <span className="section-kicker">Зачем это нужно</span>
            <h2>Делаем персонажей, которых хочется показать в трейлере.</h2>
            <p>
              Мы подключаемся на этапе идеи, когда у проекта уже есть жанр и настроение, но еще нет
              сильного образа. Помогаем быстро собрать персонажа, механику и кадр для питча,
              вертикального среза или промо-ролика.
            </p>
            <div className="intro-tags" aria-label="Форматы работы">
              <span>концепт босса</span>
              <span>визуальный язык</span>
              <span>сцена для питча</span>
            </div>
          </div>
          <figure className="intro-media">
            <img
              src="/media/lumen-anvil-concept-art.png"
              alt="Темный стол игровой арт-студии с золотыми схемами босса и голографической ареной"
            />
          </figure>
        </div>
      </section>

      <section className="section forge-section" id="forge">
        <div className="section-heading">
          <span>Что делаем</span>
          <h2>Не рисуем случайных монстров. Собираем игровые символы.</h2>
        </div>
        <div className="forge-grid">
          {forgeItems.map((item) => (
            <article className="forge-card" key={item.title}>
              <figure className="forge-card-image">
                <img src={item.image} alt={item.alt} />
              </figure>
              <div className="forge-card-copy">
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section method-section" id="method">
        <div className="method-panel">
          <div>
            <span className="section-kicker">Как работаем</span>
            <h2>От идеи до кадра, который можно показать команде или издателю.</h2>
          </div>
          <div className="process-line">
            {processSteps.map((step, index) => (
              <article className="process-step" key={step.title}>
                <div className="process-step-top">
                  <ProcessIcon type={step.icon} />
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section showreel-section" id="showreel">
        <div className="section-heading">
          <span>Примеры работ</span>
          <h2>НАШИ РАБОТЫ</h2>
          <p>
            Три коротких формата для питча: первое появление босса, фрагмент боя и атмосферный кадр мира.
          </p>
        </div>

        <div className="showreel-grid">
          {showreelShots.map((shot, index) => (
            <article className={`shot-card ${index === 0 ? 'shot-card-wide' : ''}`} key={shot.label}>
              <div className="shot-placeholder">
                <video
                  className="shot-video"
                  src={shot.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={shot.title}
                />
                <span>{shot.label}</span>
              </div>
              <div className="shot-copy">
                <h3>{shot.title}</h3>
                <p>{shot.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div>
          <span className="section-kicker">Для питча и продакшена</span>
          <h2>Принесите нам мир. Мы найдем образ, который его продаст.</h2>
        </div>
        <a className="primary-button" href="mailto:partners@lumenanvil.studio">
          partners@lumenanvil.studio
          <ArrowIcon />
        </a>
      </section>
    </main>
  );
}

export default App;
