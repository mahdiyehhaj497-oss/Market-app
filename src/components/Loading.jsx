export default function Loading() {
    return (
        <>
            <div class="flex items-center justify-center h-32 space-x-2">
                        <span class="ml-3 text-2xl text-gray-700"> Is Loading </span>
                        <div class="h-2 w-2 bg-indigo-600 rounded-full animate-bounce"></div>
                        <div class="h-2 w-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.15s]"></div>
                        <div class="h-2 w-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.3s]"></div>
                      </div>
        </>
    )
}