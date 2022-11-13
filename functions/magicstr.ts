export async function onRequestGet({ params }) {  
    const res = await fetch(`https://magicstr-gen.pdscir-api.workers.dev/`);  
    const data = await res.json();  
    const info = JSON.stringify(data, null, 2);  
    return new Response(res);
}
