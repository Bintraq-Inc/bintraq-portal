#!/usr/bin/env node

/**
 * Pre-commit validation script for React components
 * Checks for common issues before allowing tool execution
 */

const fs = require('fs');
const path = require('path');

// Read hook input from stdin
let input = '';
process.stdin.on('data', (chunk) => {
  input += chunk;
});

process.stdin.on('end', () => {
  try {
    const hookData = JSON.parse(input);
    const result = validateToolUse(hookData);
    
    // Output result as JSON
    console.log(JSON.stringify(result, null, 2));
    process.exit(0);
  } catch (error) {
    console.error(JSON.stringify({
      continue: true,
      systemMessage: `Validation warning: ${error.message}`
    }));
    process.exit(0);
  }
});

function validateToolUse(hookData) {
  const { tool, args } = hookData;
  
  // Validate file edits in component files
  if ((tool === 'replace_string_in_file' || tool === 'create_file') && args.filePath) {
    const filePath = args.filePath;
    
    // Check for JSX.Element usage in component files
    if (filePath.endsWith('.tsx') && args.newString) {
      const hasJsxElement = args.newString.includes('JSX.Element');
      const hasReactElementImport = args.newString.includes('ReactElement');
      
      if (hasJsxElement && !hasReactElementImport) {
        return {
          hookSpecificOutput: {
            hookEventName: 'PreToolUse',
            permissionDecision: 'ask',
            permissionDecisionReason: 'Found JSX.Element usage. Consider using ReactElement instead to prevent TS2503 build errors.'
          }
        };
      }
    }
    
    // Check for component file organization
    if (filePath.includes('src/components/') && filePath.endsWith('.tsx')) {
      const isInProperFolder = 
        filePath.includes('components/common/') ||
        filePath.includes('components/layout/') ||
        filePath.includes('components/features/');
      
      if (!isInProperFolder) {
        return {
          hookSpecificOutput: {
            hookEventName: 'PreToolUse',
            permissionDecision: 'ask',
            permissionDecisionReason: 'Component should be placed in common/, layout/, or features/ subdirectory.'
          }
        };
      }
    }
  }
  
  // Allow by default
  return {
    hookSpecificOutput: {
      hookEventName: 'PreToolUse',
      permissionDecision: 'allow'
    }
  };
}
