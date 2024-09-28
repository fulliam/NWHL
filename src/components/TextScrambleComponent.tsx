import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type TextScrambleProps = {
  phrases: string[];
  enableReturnValue?: boolean;
  onOutput?: (text: string) => void;
};

class TextScramble {
  el: {
    currentText: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
  };
  chars: string;
  queue: {
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
  }[];
  frame: number;
  resolve!: () => void;

  constructor(
    setText: React.Dispatch<React.SetStateAction<string>>,
    currentText: string,
  ) {
    this.el = { currentText, setText };
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.queue = [];
    this.frame = 0;
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.currentText;
    const length = Math.max(oldText.length, newText.length);
    return new Promise<void>((resolve) => {
      this.resolve = resolve;
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      this.frame = 0;
      this.update();
    });
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += char;
      } else {
        output += from;
      }
    }
    this.el.setText(output); // Устанавливаем текст напрямую
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frame++;
      requestAnimationFrame(() => this.update());
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const TextScrambleComponent: React.FC<TextScrambleProps> = ({
  phrases,
  enableReturnValue,
  onOutput,
}) => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');
  const fx = useRef<TextScramble | null>(null);

  useEffect(() => {
    if (fx.current === null) {
      fx.current = new TextScramble(setText, text);
    }

    const nextPhrase = () => {
      const newText = phrases[counter];
      fx.current?.setText(newText).then(() => {
        setTimeout(
          () => setCounter((prevCounter) => (prevCounter + 1) % phrases.length),
          1000,
        );
      });

      if (enableReturnValue && onOutput) {
        onOutput(newText);
      }
    };

    nextPhrase();

    return () => {
      // Очистка эффекта при размонтировании компонента
    };
  }, [counter, phrases]);

  return (
    <View style={styles.scramble}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scramble: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: '100',
    color: '#fafafa',
  },
});

export default TextScrambleComponent;
