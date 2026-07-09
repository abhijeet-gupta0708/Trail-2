# Complete Text-to-Speech Converter with GUI
# Install dependencies first: pip install pyttsx3

import pyttsx3
import tkinter as tk
from tkinter import ttk, messagebox, filedialog

# Initialize pyttsx3 engine
engine = pyttsx3.init()

# Function to get available voices
voices = engine.getProperty('voices')
voice_names = [voice.name for voice in voices]

# Function to speak text
import threading

def speak():
    text = text_entry.get("1.0", tk.END).strip()
    if not text:
        messagebox.showwarning("Input Error", "Please enter some text to speak!")
        return

    def run_speech():
        selected_voice_index = voice_dropdown.current()
        rate = rate_slider.get()
        engine.setProperty('voice', voices[selected_voice_index].id)
        engine.setProperty('rate', rate)
        engine.say(text)
        engine.runAndWait()

    # Run speech in a separate thread so GUI doesn't freeze
    threading.Thread(target=run_speech).start()


# Function to save speech to file
def save_audio():
    text = text_entry.get("1.0", tk.END).strip()
    if not text:
        messagebox.showwarning("Input Error", "Please enter some text to save!")
        return
    file_path = filedialog.asksaveasfilename(defaultextension=".mp3",
                                             filetypes=[("MP3 files", "*.mp3")])
    if file_path:
        selected_voice_index = voice_dropdown.current()
        rate = rate_slider.get()
        engine.setProperty('voice', voices[selected_voice_index].id)
        engine.setProperty('rate', rate)
        engine.save_to_file(text, file_path)
        engine.runAndWait()
        messagebox.showinfo("Success", f"Audio saved to {file_path}")

# GUI Setup
root = tk.Tk()
root.title("Text-to-Speech Converter")
root.geometry("500x400")
root.resizable(False, False)

# Stylish text input frame
text_frame = tk.Frame(root, bg="#f0f0f0", bd=2, relief="groove")
text_frame.pack(pady=10, padx=20, fill="x")

tk.Label(text_frame, text="Enter Text:", font=("Arial", 12, "bold"), bg="#f0f0f0").pack(anchor="w", padx=5, pady=3)

text_entry = tk.Text(text_frame, height=6, font=("Arial", 12), bd=0, wrap="word")
text_entry.pack(padx=5, pady=5, fill="x")

# Voice selection
tk.Label(root, text="Select Voice:", font=("Arial", 12)).pack(pady=5)
voice_dropdown = ttk.Combobox(root, values=voice_names, state="readonly", font=("Arial", 12))
voice_dropdown.current(0)
voice_dropdown.pack(pady=5)

# Speech rate slider
tk.Label(root, text="Speech Rate:", font=("Arial", 12)).pack(pady=5)
rate_slider = tk.Scale(root, from_=50, to=300, orient=tk.HORIZONTAL)
rate_slider.set(150)
rate_slider.pack(pady=5)

# Speak and Save buttons
button_frame = tk.Frame(root)
button_frame.pack(pady=10)

speak_button = tk.Button(button_frame, text="Speak", command=speak, width=15, bg="lightgreen")
speak_button.grid(row=0, column=0, padx=10)

save_button = tk.Button(button_frame, text="Save Audio", command=save_audio, width=15, bg="lightblue")
save_button.grid(row=0, column=1, padx=10)

# Run the GUI
root.mainloop()


