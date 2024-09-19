interface TaskResult {
    id: string
    properties: any
}


export default defineEventHandler(async (event) => {
    const notionToken = getRequestHeader(event, 'Notion-Token');
    const notionApiBaseUrl = "https://api.notion.com"
    const notionVersion = "2022-06-28"

    if (notionToken == undefined || notionToken.trim() == '') {
        return setResponseStatus(event, 401, 'Not authenticated!')
    }

    try {
        return await $fetch<{
            results: TaskResult[]
        }>(`${notionApiBaseUrl}/v1/databases/10620b5e099380ba9c69dd431d316683/query`, {
            method: 'POST',
            headers: {
                "Notion-Version": notionVersion,
                "Authorization": `Bearer ${notionToken}`,
                "Content-Type": "application/json"
            },
            body: {
                "filter": {
                    "property": "Name",
                    "rich_text": {
                        "is_not_empty": true
                    }
                }
            }
        });
    } catch (ex) {
        console.log(ex);
        setResponseStatus(event, 500, 'Error loading tasks');
    }
})