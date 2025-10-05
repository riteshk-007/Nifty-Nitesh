import Link from 'next/link';
import React from 'react';

export function Breadcrumbs({ items }) {
    return (
        <nav
            aria-label="Breadcrumb"
            className="text-sm text-green-400"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
        >
            <ol className="flex items-center gap-2 flex-wrap">
                {items.map((item, index) => (
                    <li
                        key={`${item.name}-${index}`}
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                        className="flex items-center gap-2"
                    >
                        {item.href ? (
                            <Link
                                href={item.href}
                                itemProp="item"
                                className="hover:text-green-300"
                            >
                                <span itemProp="name">{item.name}</span>
                            </Link>
                        ) : (
                            <span itemProp="name" aria-current="page" className=" text-green-400">
                                {item.name}
                            </span>
                        )}
                        <meta itemProp="position" content={String(index + 1)} />
                        {index < items.length - 1 && <span className="text-green-600">/</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumbs;
