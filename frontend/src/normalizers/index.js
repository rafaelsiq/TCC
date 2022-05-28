export const adNormalizer = (data) => {
    return {
        id: data._id,
        title: data.title,
        status: data.status,
        value: data.value,
        url:data.fileURL,
        name:data.title
    }
}