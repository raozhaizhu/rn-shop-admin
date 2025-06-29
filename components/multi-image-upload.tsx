import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface MultiImageUploadProps {
    value: File[];
    onChange: (files: File[]) => void;
}

export const MultiImageUpload = ({ value, onChange }: MultiImageUploadProps) => {
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const fileArray = Array.from(files);
            setPreviewUrls(fileArray.map((file) => URL.createObjectURL(file)));
            onChange(fileArray);
        }
    };

    const handleRemove = (index: number) => {
        const newFiles = [...value];
        newFiles.splice(index, 1);
        onChange(newFiles);
        setPreviewUrls(newFiles.map((file) => URL.createObjectURL(file)));
    };

    return (
        <div className="space-y-2">
            <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="file-input"
            />
            <label htmlFor="file-input" className="cursor-pointer">
                <Button variant="outline">选择图片</Button>
            </label>
            <div className="grid grid-cols-3 gap-2">
                {previewUrls.map((url, index) => (
                    <div key={index} className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={url} alt={`Preview ${index}`} className="w-full h-auto rounded" />
                        <Button
                            type="button"
                            onClick={() => handleRemove(index)}
                            className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                        >
                            <Trash2 className="w-4 h-4" />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};
