import './App.css'

const WHATSAPP_NUMBER = '51994277540'
const WHATSAPP_MESSAGE = 'Hola! Vi tus videos en TikTok y me interesa una app personalizada para mi negocio.'

const APPS = [
  {
    id: 1,
    emoji: '💳',
    name: 'Gestor de Créditos',
    category: 'Finanzas · Préstamos',
    description: 'La app para prestamistas que quieren profesionalizar su negocio. Registra clientes, préstamos, genera cronogramas de cuotas automáticos y lleva el control total desde tu iPhone.',
    iosUrl: 'https://apps.apple.com/us/app/gestor-de-cr%C3%A9ditos/id6749607856',
    color: '#fe2c55',
    highlights: ['Clientes y préstamos', 'Cronograma automático', 'Control de pagos'],
  },
  {
    id: 2,
    emoji: '🏠',
    name: 'Renta Fácil',
    category: 'Propiedades · Alquileres',
    description: 'Gestiona tus propiedades en alquiler desde el móvil. Controla ingresos, gastos, pagos de arrendatarios y el estado de cada propiedad en un solo lugar.',
    iosUrl: 'https://apps.apple.com/us/app/renta-f%C3%A1cil-control-rentas/id6748422986',
    color: '#9b59f5',
    highlights: ['Ingresos y gastos', 'Control de arrendatarios', 'Múltiples propiedades'],
  },
  {
    id: 3,
    emoji: '🚗',
    name: 'Autocare Pro',
    category: 'Vehículos · Mantenimiento',
    description: 'Tu asistente personal para el cuidado de tu vehículo. Registra mantenimientos, gastos de combustible, seguros y recibe alertas para nunca olvidar nada.',
    iosUrl: 'https://apps.apple.com/us/app/autocare-gesti%C3%B3n-de-veh%C3%ADculos/id6749963091',
    color: '#25f4ee',
    highlights: ['Gastos de combustible', 'Mantenimientos y alertas', 'Historial completo'],
  },
]

const SERVICES = [
  {
    emoji: '🚀',
    title: 'Entrega rápida',
    desc: 'Tu app lista en semanas, no meses.',
  },
  {
    emoji: '🍎',
    title: 'Exclusivo iOS',
    desc: 'Desarrollamos solo para iPhone y App Store.',
  },
  {
    emoji: '💳',
    title: 'Suscripciones integradas',
    desc: 'Monetiza con pagos recurrentes.',
  },
  {
    emoji: '🔧',
    title: 'Soporte incluido',
    desc: 'Te acompañamos después del lanzamiento.',
  },
]

function AppCard({ app }) {
  return (
    <article className="app-card" style={{ '--card-accent': app.color }}>
      <div className="app-card__header">
        <div className="app-card__icon" style={{ background: `${app.color}18`, border: `1.5px solid ${app.color}50` }}>
          <span role="img" aria-label={app.name}>{app.emoji}</span>
        </div>
        <div className="app-card__badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Solo iOS
        </div>
      </div>
      <div className="app-card__info">
        <span className="app-card__category">{app.category}</span>
        <h3 className="app-card__name">{app.name}</h3>
        <p className="app-card__desc">{app.description}</p>
      </div>
      <ul className="app-card__highlights">
        {app.highlights.map(h => (
          <li key={h}>
            <span className="highlight-dot" style={{ background: app.color }} aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>
      <a
        href={app.iosUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="store-btn store-btn--ios-full"
        style={{ '--btn-color': app.color }}
        aria-label={`Descargar ${app.name} en App Store`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        Descargar gratis en App Store
      </a>
    </article>
  )
}

function ServiceCard({ item }) {
  return (
    <div className="service-card">
      <span className="service-card__emoji" role="img" aria-hidden="true">{item.emoji}</span>
      <div>
        <h4 className="service-card__title">{item.title}</h4>
        <p className="service-card__desc">{item.desc}</p>
      </div>
    </div>
  )
}

function WhatsAppButton({ floating = false }) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={floating ? 'whatsapp-fab' : 'whatsapp-inline-btn'}
      aria-label="Contactar por WhatsApp"
    >
      <svg width={floating ? 28 : 20} height={floating ? 28 : 20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      {!floating && <span>Escríbeme por WhatsApp</span>}
    </a>
  )
}

export default function App() {
  return (
    <div className="landing">

      {/* ── HERO ── */}
      <header className="hero">
        <div className="hero__bg-glow" aria-hidden="true" />
        <div className="hero__content">
          <div className="hero__avatar">
            <span role="img" aria-label="Desarrollador de apps">👨‍💻</span>
          </div>
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Disponible para proyectos
          </div>
          <h1 className="hero__title">
            Apps que <span className="gradient-text">transforman</span> tu vida
          </h1>
          <p className="hero__subtitle">
            Descarga mis apps gratis y desbloquea el potencial premium. Simples, rápidas y diseñadas para ti.
          </p>
          <div className="hero__cta">
            <a href="#apps" className="btn btn--primary">
              Ver mis apps
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </a>
            <WhatsAppButton />
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <strong>3</strong>
              <span>Apps publicadas</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <strong>Gratis</strong>
              <span>Descarga</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <strong>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign:'middle', marginRight:'2px'}} aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                iPhone
              </strong>
              <span>App Store</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── APPS ── */}
      <section id="apps" className="section">
        <div className="section__header">
          <p className="section__label">Mis aplicaciones</p>
          <h2 className="section__title">3 apps para gestionar<br />lo que más importa</h2>
          <p className="section__subtitle">Todas mis apps son gratuitas en el App Store. Algunas incluyen funciones premium opcionales por suscripción.</p>
        </div>
        <div className="apps-grid">
          {APPS.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      {/* ── CUSTOM APPS ── */}
      <section id="custom" className="section section--dark">
        <div className="custom-apps">
          <div className="section__header">
            <p className="section__label section__label--cyan">Para tu negocio</p>
            <h2 className="section__title">¿Quieres tu propia <span className="gradient-text--cyan">app personalizada?</span></h2>
            <p className="section__subtitle">Desarrollamos apps nativas para <strong>iPhone exclusivamente</strong> — publicadas en el App Store. Para negocios, profesionales y emprendedores. Desde la idea hasta el lanzamiento.</p>
          </div>

          <div className="services-grid">
            {SERVICES.map((item, i) => (
              <ServiceCard key={i} item={item} />
            ))}
          </div>

          <div className="custom-apps__industries">
            <p className="industries__label">Hemos creado apps para:</p>
            <div className="industries__tags">
              {['Restaurantes', 'Salones de belleza', 'Gimnasios', 'Clínicas', 'Hoteles', 'Inmobiliarias', 'Abogados', 'Contadores', 'Tiendas', 'Y más...'].map(tag => (
                <span key={tag} className="industry-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="custom-apps__cta">
            <WhatsAppButton />
            <p className="custom-apps__cta-note">Respondo en menos de 24 horas · Consulta sin compromiso</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p className="footer__copy">Hecho con ❤️ · Sígueme en TikTok para más contenido</p>
        <div className="footer__links">
          <a href="#apps">Mis Apps</a>
          <span aria-hidden="true">·</span>
          <a href="#custom">App personalizada</a>
          <span aria-hidden="true">·</span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <WhatsAppButton floating />
    </div>
  )
}
