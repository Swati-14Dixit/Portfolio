import streamlit as st
import base64
from pathlib import Path

# Set page config
st.set_page_config(
    page_title="Swati Dixit - Data Scientist Portfolio",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Function to read file and encode to base64
def get_base64_of_bin_file(bin_file):
    with open(bin_file, 'rb') as f:
        data = f.read()
    return base64.b64encode(data).decode()

# Function to set background image
def set_background(png_file):
    bin_str = get_base64_of_bin_file(png_file)
    page_bg_img = '''
    <style>
    .stApp {
        background-image: url("data:image/png;base64,%s");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
    </style>
    ''' % bin_str
    st.markdown(page_bg_img, unsafe_allow_html=True)

# Read and display the HTML content
def display_portfolio():
    try:
        # Read the HTML file
        with open('index.html', 'r', encoding='utf-8') as f:
            html_content = f.read()
        
        # Display the HTML content
        st.components.v1.html(html_content, height=2000, scrolling=True)
        
    except FileNotFoundError:
        st.error("index.html file not found. Please make sure it's in the same directory.")
    except Exception as e:
        st.error(f"Error loading portfolio: {e}")

# Main app
def main():
    # Hide Streamlit default elements
    hide_streamlit_style = """
    <style>
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
    </style>
    """
    st.markdown(hide_streamlit_style, unsafe_allow_html=True)
    
    # Display the portfolio
    display_portfolio()

if __name__ == "__main__":
    main()
