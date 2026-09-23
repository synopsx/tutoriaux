// ne s’active qu’en développement local, sans effet en production
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  const es = new EventSource('/reload-events');
  es.onmessage = () => location.reload();
}
