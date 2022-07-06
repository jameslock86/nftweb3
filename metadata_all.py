from PIL import Image 
from IPython.display import display 
import random
import json
import os




#### Generate Metadata for all Traits 
os.mkdir(f'./metadata')

METADATA_FILE_NAME = './metadata/all-traits.json'; 
with open(METADATA_FILE_NAME, 'w') as outfile:
    json.dump(all_images, outfile, indent=4)