const urlParams = new URLSearchParams(window.location.search);
const acUrl = urlParams.get('acUrl') || (new Date().getTime().toString());

export default function App() {
  return (
    <div>
      <h1>AIWB Page</h1>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ flex: 1 }}>
          <h3>AIChat (Iframe)</h3>
          <iframe
            src={`${acUrl}?acId=aichat-aiwb`}
            style={{ width: '600px', height: '800px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
      </div>
    </div>
  );
}
