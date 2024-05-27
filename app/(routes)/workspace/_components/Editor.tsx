"use client"
import React, { useEffect, useRef, useState } from 'react'
import EditorJS from '@editorjs/editorjs';
// @ts-ignore
import Header from '@editorjs/header';
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Checklist from '@editorjs/checklist'
// @ts-ignore
import Paragraph from '@editorjs/paragraph';
// @ts-ignore
import Warning from '@editorjs/warning';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
import { FILE } from '../../dashboard/_components/FileList';
// @ts-ignore
// import ImageTool from '@editorjs/image';
import SimpleImage from "@editorjs/simple-image";
// @ts-ignore
import Quote from '@editorjs/quote';
// @ts-ignore
import RawTool from '@editorjs/raw';
// @ts-ignore
import LinkTool from '@editorjs/link';
// @ts-ignore
import AttachesTool from '@editorjs/attaches';
// @ts-ignore
import NestedList from '@editorjs/nested-list';

const rawDocument={
    "time" : 1550476186479,
    "blocks" : [{
        data:{
            text:'Document Name',
            level:2
        },
        id:"123",
        type:'header'
    },
    {
        data:{
            level:4
        },
        id:"1234",
        type:'header'
    }],
    "version" : "2.8.1"
}
function Editor({onSaveTrigger,fileId,fileData}:{onSaveTrigger:any,fileId:any,fileData:FILE}) {
    const ref=useRef<EditorJS>();
    const updateDocument=useMutation(api.files.updateDocument);
    const [document,setDocument]=useState(rawDocument);
    useEffect(()=>{
        fileData&&initEditor();
    },[fileData])

    useEffect(()=>{
      console.log("triiger Value:",onSaveTrigger);
      onSaveTrigger&&onSaveDocument();
    },[onSaveTrigger])

    const initEditor=()=>{
        const editor = new EditorJS({
            /**
             * Id of Element that should contain Editor instance
             */

            tools:{
                header: {
                    class: Header,
                    shortcut: 'CMD+SHIFT+H',
                    config:{
                        placeholder:'Enter a Header'
                    }
                  },
                  list: {
                    class: List,
                    inlineToolbar: true,
                    config: {
                      defaultStyle: 'unordered'
                    }
                  },
                  checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                  },
                  paragraph: {
                    class: Paragraph,
                    inlineToolbar: true,
                  },
                  warning: Warning,
                  image: SimpleImage,
                  quote: {
                    class: Quote,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+O',
                    config: {
                      quotePlaceholder: 'Enter a quote',
                      captionPlaceholder: 'Quote\'s author',
                    },
                  },
                  raw: RawTool,
                  linkTool: {
                    class: LinkTool,
                    config: {
                      endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
                    }
                  },
                  nestedlist: {
                    class: NestedList,
                    inlineToolbar: true,
                    config: {
                      defaultStyle: 'ordered'
                    },
                  },
                  attaches: {
                    class: AttachesTool,
                    config: {
                      endpoint: 'http://localhost:8008/uploadFile'
                    }
                  }
                  // image: {
                  //   class: ImageTool,
                  //   config: {
                  //     endpoints: {
                  //       byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                  //       byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                  //     }
                  //   }
                  // },
                  
            },
           
            holder: 'editorjs',
            data:fileData?.document?JSON.parse(fileData.document):rawDocument
          });
          ref.current=editor;
    }

    const onSaveDocument=()=>{
      if(ref.current)
      {
        ref.current.save().then((outputData) => {
          console.log('Article data: ', outputData);
          updateDocument({
            _id:fileId,
            document:JSON.stringify(outputData)
          }).then(resp=>{
            
              toast('Document Updated!')
            
          },(e)=>{
            toast("Server Error!")
          })
        }).catch((error) => {
          console.log('Saving failed: ', error)
        });
      }
    }
  return (
    <div>
        <div id='editorjs' className='ml-20'></div>
    </div>
  )
}

export default Editor