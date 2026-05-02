export function optimizePrompt(input) {
    if (!input) return "Please enter a prompt.";

    return `
### Optimized Prompt

You are a highly capable assistant.

TASK:
${input.trim()}

CONSTRAINTS:
- Be accurate
- Be structured
- Be concise where possible

OUTPUT FORMAT:
- Clear sections
- Bullet points if needed
- No unnecessary commentary
`.trim();
}
