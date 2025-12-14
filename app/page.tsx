export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    }}>
      <div style={{
        background: 'white',
        padding: '48px',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center',
        maxWidth: '600px',
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '16px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Testing Success! ✓
        </h1>
        <p style={{
          fontSize: '20px',
          color: '#666',
          marginBottom: '32px',
        }}>
          Your application is live and running perfectly.
        </p>
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <div style={{
            padding: '16px 24px',
            background: '#f0f0f0',
            borderRadius: '8px',
            fontSize: '14px',
          }}>
            <strong>Status:</strong> Active
          </div>
          <div style={{
            padding: '16px 24px',
            background: '#f0f0f0',
            borderRadius: '8px',
            fontSize: '14px',
          }}>
            <strong>Framework:</strong> Next.js 14
          </div>
          <div style={{
            padding: '16px 24px',
            background: '#f0f0f0',
            borderRadius: '8px',
            fontSize: '14px',
          }}>
            <strong>Deployed:</strong> Vercel
          </div>
        </div>
      </div>
    </main>
  )
}
