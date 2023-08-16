export default defineEventHandler(async (event) => {

    // const { name } = getQuery(event) //getQuery was used in place of the recommended useQuery() from the tutorial video


    // // const requestBody = await event.request.json();
    // const { age } = await readBody(event)   //readbody was used instead of the recommended await useBody(event) from the tutorial video

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_yUHWSIjf0EFhV8XvgdfAewZ4OKIshIJZrAKqNGsg')
    return data;
})