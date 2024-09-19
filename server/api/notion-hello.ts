
export default defineEventHandler(async (event) => {

    const notionToken = getRequestHeader(event, 'Notion-Token');
    const notionApiBaseUrl = "https://api.notion.com"
    const notionVersion = "2022-06-28"

    if (notionToken == undefined || notionToken.trim() == '') {
        return 'no_token'
    }

    try {
        await $fetch<{id: string}>(`${notionApiBaseUrl}/v1/users/me`, {
            method: 'GET',
            headers: {
                "Notion-Version": notionVersion,
                "Authorization": `Bearer ${notionToken}`
            }
        });
        return 'yes';
    } catch (ex) {
        console.log(ex);
        return 'invalid_token'
    }
})