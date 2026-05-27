// app/api/chat/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const encoder = new TextEncoder()

  // 1. 创建一个可读流
  const stream = new ReadableStream({
    async start(controller) {
      const words = ['你', '好', '！', '欢迎', '来到', 'AI', '的', '世界', '。']

      for (const word of words) {
        // 模拟网络延迟
        await new Promise((resolve) => setTimeout(resolve, 200))

        // 按照 SSE 格式编码并推入流中
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ word })}\n\n`))
      }

      controller.close() // 传输完毕，关闭流
    },
  })

  // 2. 返回 Response，并指定 Content-Type
  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  })
}
