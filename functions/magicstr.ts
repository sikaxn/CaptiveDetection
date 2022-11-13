export async function onRequestGet({ params }) {  
    const res = await fetch(`https://magicstr-gen.pdscir-api.workers.dev/`);  
    return new Response(res);
}
